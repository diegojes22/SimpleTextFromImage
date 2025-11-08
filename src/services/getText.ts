import { createWorker } from 'tesseract.js';

export async function getTextFromImage(image?: File): Promise<string> {
    if(!image) {
        console.error("No image provided");
        return "";
    }

    const worker = await createWorker();

    try {
        await worker.load("spa");
        const ret = await worker.recognize(image);

        console.log(ret.data.text);
        return ret.data.text;
    } 
    catch (error) {
        console.error("Error initializing Tesseract worker:", error);
        return "";
    } 
    finally {
        await worker.terminate();
    }
}