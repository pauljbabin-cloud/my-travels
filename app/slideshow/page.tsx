'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const SlideshowComponent: React.FC = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const showId = searchParams.get('showId');

    const [images, setImages] = useState<string[]>([]);
    const [slideIndex, setSlideIndex] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    // Zoom & Pan states
    const [isZoomable, setIsZoomable] = useState<boolean>(false);
    const [zoom, setZoom] = useState<number>(1);
    const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [hasDragged, setHasDragged] = useState<boolean>(false);

    // Touch pinch-to-zoom ref
    const initialPinchRef = useRef<{ distance: number; zoom: number } | null>(null);

    useEffect(() => {
        if (!showId || showId === 'blank') {
            setLoading(false);
            return;
        }

        fetch(`/api/get-images?showId=${encodeURIComponent(showId)}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    console.error("API Error:", data.error);
                } else if (data.length === 0) {
                    console.warn("No images found in this folder.");
                } else {
                    setImages(data);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching images:", error);
                setLoading(false);
            });
    }, [showId]);

    const resetZoom = () => {
        setZoom(1);
        setPan({ x: 0, y: 0 });
        setIsDragging(false);
        initialPinchRef.current = null;
    };

    const nextSlide = () => {
        if (images.length === 0) return;
        resetZoom();
        setIsZoomable(false);
        setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        if (images.length === 0) return;
        resetZoom();
        setIsZoomable(false);
        setSlideIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleClose = () => {
        window.close();
        setTimeout(() => {
            if (!window.closed) {
                router.back();
            }
        }, 100);
    };

    const getFilename = (url: string) => {
        const match = url.match(/[^/]+(?=\.[^.]+$)/);
        return match ? match[0] : 'Image';
    };

    const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const { naturalWidth, naturalHeight } = e.currentTarget;
        const exceedsThreshold = naturalWidth > 800 || naturalHeight > 600;
        setIsZoomable(exceedsThreshold);
        resetZoom();
    };

    // Button & Wheel Zoom handlers
    const zoomIn = () => {
        if (!isZoomable) return;
        setZoom((prev) => Math.min(prev + 0.5, 4));
    };

    const zoomOut = () => {
        if (!isZoomable) return;
        setZoom((prev) => {
            const next = Math.max(prev - 0.5, 1);
            if (next === 1) setPan({ x: 0, y: 0 });
            return next;
        });
    };

    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        if (!isZoomable) return;
        e.preventDefault();
        if (e.deltaY < 0) {
            setZoom((prev) => Math.min(prev + 0.25, 4));
        } else {
            setZoom((prev) => {
                const next = Math.max(prev - 0.25, 1);
                if (next === 1) setPan({ x: 0, y: 0 });
                return next;
            });
        }
    };

    // Mouse Pan / Drag handlers
    const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
        if (!isZoomable) return;
        e.preventDefault();
        setHasDragged(false);
        if (zoom > 1) {
            setIsDragging(true);
            setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || zoom <= 1) return;
        setHasDragged(true);
        setPan({
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y,
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Touch Pinch-to-Zoom & Pan handlers
    const getTouchDistance = (touches: React.TouchList) => {
        const dx = touches[0].clientX - touches[1].clientX;
        const dy = touches[0].clientY - touches[1].clientY;
        return Math.hypot(dx, dy);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isZoomable) return;

        if (e.touches.length === 2) {
            initialPinchRef.current = {
                distance: getTouchDistance(e.touches),
                zoom,
            };
            setIsDragging(false);
        } else if (e.touches.length === 1 && zoom > 1) {
            setHasDragged(false);
            setIsDragging(true);
            setDragStart({
                x: e.touches[0].clientX - pan.x,
                y: e.touches[0].clientY - pan.y,
            });
        }
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isZoomable) return;

        if (e.touches.length === 2 && initialPinchRef.current) {
            const currentDistance = getTouchDistance(e.touches);
            const scaleFactor = currentDistance / initialPinchRef.current.distance;
            const nextZoom = Math.min(Math.max(initialPinchRef.current.zoom * scaleFactor, 1), 4);
            setZoom(nextZoom);
            if (nextZoom === 1) {
                setPan({ x: 0, y: 0 });
            }
        } else if (e.touches.length === 1 && isDragging && zoom > 1) {
            setHasDragged(true);
            setPan({
                x: e.touches[0].clientX - dragStart.x,
                y: e.touches[0].clientY - dragStart.y,
            });
        }
    };

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        if (e.touches.length < 2) {
            initialPinchRef.current = null;
        }
        if (e.touches.length === 0) {
            setIsDragging(false);
        }
    };

    // Toggle 1x <-> 2x on simple click
    const handleImageClick = () => {
        if (!isZoomable || hasDragged) return;
        if (zoom === 1) {
            setZoom(2);
        } else {
            resetZoom();
        }
    };

    if (loading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'Arial, sans-serif' }}>Loading...</div>;
    }

    return (
        <>
            <style jsx global>{`
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    overflow: hidden;
                }
                .slideshow-container {
                    max-width: 800px;
                    width: 100%;
                    position: relative;
                    margin: auto;
                    overflow: hidden;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
                    border-radius: 8px;
                    background-color: #000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    touch-action: none;
                    transition: max-width 0.25s ease, height 0.25s ease, border-radius 0.25s ease;
                }
                .slideshow-container.zoomed {
                    max-width: 100vw;
                    width: 100vw;
                    height: 100vh;
                    border-radius: 0;
                }
                .close-btn {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background-color: rgba(0, 0, 0, 0.6);
                    color: white;
                    border: none;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    font-size: 20px;
                    font-weight: bold;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: background-color 0.3s ease;
                    z-index: 20;
                }
                .close-btn:hover {
                    background-color: rgba(0, 0, 0, 0.9);
                }
                .zoom-controls {
                    position: fixed;
                    top: 20px;
                    left: 20px;
                    display: flex;
                    gap: 8px;
                    z-index: 20;
                }
                .zoom-btn {
                    background-color: rgba(0, 0, 0, 0.6);
                    color: white;
                    border: none;
                    border-radius: 4px;
                    padding: 8px 12px;
                    font-size: 14px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                .zoom-btn:hover:not(:disabled) {
                    background-color: rgba(0, 0, 0, 0.9);
                }
                .zoom-btn:disabled {
                    opacity: 0.4;
                    cursor: not-allowed;
                }
                .mySlides {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-sizing: border-box; 
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }
                .mySlides img {
                    max-width: 100vw;
                    max-height: 100vh;
                    width: auto;
                    height: auto;
                    object-fit: contain;
                    user-select: none;
                    -webkit-user-drag: none;
                }
                .prev, .next {
                    cursor: pointer;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    padding: 16px;
                    color: white;
                    font-weight: bold;
                    font-size: 18px;
                    background-color: rgba(0, 0, 0, 0.4);
                    border: none;
                    border-radius: 0 3px 3px 0;
                    user-select: none;
                    transition: background-color 0.3s ease;
                    z-index: 10;
                }
                .prev {
                    left: 0;
                    border-radius: 3px 0 0 3px;
                }
                .next {
                    right: 0;
                    border-radius: 3px 0 0 3px;
                }
                .prev:hover, .next:hover {
                    background-color: rgba(0, 0, 0, 0.8);
                }
                .caption {
                    color: #f2f2f2;
                    font-size: 15px;
                    padding: 12px 24px;
                    position: absolute;
                    bottom: 15px;
                    width: 100%;
                    text-align: center;
                    background-color: rgba(0,0,0,0.5);
                    pointer-events: none;
                }
                .fade {
                    animation-name: fadeAnimation;
                    animation-duration: 0.8s;
                }
                @keyframes fadeAnimation {
                    from { opacity: 0.4; } 
                    to { opacity: 1; }
                }
            `}</style>

            {isZoomable && (
                <div className="zoom-controls">
                    <button className="zoom-btn" onClick={zoomIn} disabled={zoom >= 4} aria-label="Zoom in">
                        +
                    </button>
                    <button className="zoom-btn" onClick={zoomOut} disabled={zoom <= 1} aria-label="Zoom out">
                        −
                    </button>
                    {zoom > 1 && (
                        <button className="zoom-btn" onClick={resetZoom} aria-label="Reset zoom">
                            Reset ({Math.round(zoom * 100)}%)
                        </button>
                    )}
                </div>
            )}

            <button className="close-btn" onClick={handleClose} aria-label="Close slideshow">
                ✕
            </button>

            <div 
                className={`slideshow-container ${zoom > 1 ? 'zoomed' : ''}`}
                onWheel={handleWheel}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {images.length > 0 && (
                    <div className="mySlides fade">
                        <img 
                            src={images[slideIndex]} 
                            alt={getFilename(images[slideIndex])} 
                            onLoad={handleImageLoad}
                            onMouseDown={handleMouseDown}
                            onClick={handleImageClick}
                            style={{
                                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                                transition: isDragging || initialPinchRef.current ? 'none' : 'transform 0.2s ease-out',
                                cursor: !isZoomable
                                    ? 'default'
                                    : zoom > 1
                                        ? isDragging
                                            ? 'grabbing'
                                            : 'grab'
                                        : 'zoom-in',
                            }}
                        />
                        <div className="caption">
                            {getFilename(images[slideIndex])}
                            {isZoomable && zoom === 1 ? ' (Click, pinch, or scroll to zoom)' : ''}
                        </div>
                    </div>
                )}

                {images.length === 0 && !loading && (
                    <div style={{ color: '#fff', textAlign: 'center', padding: '20px' }}>
                        No slideshow content to display.
                    </div>
                )}

                <button className="prev" id="prevBtn" onClick={prevSlide}>❮</button>
                <button className="next" id="nextBtn" onClick={nextSlide}>❯</button>
            </div>
        </>
    );
};

export default function SlideshowPage() {
    return (
        <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'Arial, sans-serif' }}>Loading layout...</div>}>
            <SlideshowComponent />
        </Suspense>
    );
}
