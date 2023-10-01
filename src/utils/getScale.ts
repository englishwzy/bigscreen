export function getScale(width = 1920,height = 1080) 
{
    const w = window.innerWidth / width;
    const h = window.innerHeight / height;
    return w < h ? w : h;
}