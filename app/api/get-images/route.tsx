import { NextResponse } from 'next/server.ts';
import fs from 'fs';
import path from 'path';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const rawShowId = searchParams.get('showId') || '';
    const showId = rawShowId.replace(/[^a-zA-Z0-9_\-]/g, '');

    if (!showId) {
        return NextResponse.json({ error: 'Missing or invalid showId parameter.' }, { status: 400 });
    }

    const dirPath = path.join(process.cwd(), 'public', 'images', showId); 

    if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) {
        return NextResponse.json({ error: 'Folder not found.' }, { status: 404 });
    }

    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    
    try {
        const files = fs.readdirSync(dirPath);
        const images = files
            .filter(file => allowedExtensions.includes(path.extname(file).toLowerCase()))
            .map(file => `/images/${showId}/${file}`);

        images.sort();
        return NextResponse.json(images);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error reading directory.' }, { status: 500 });
    }
}
