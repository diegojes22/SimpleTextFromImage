import React, {useState, useEffect, useRef} from 'react';

export function useImage() {
    const [fileName, setFileName] = useState<string>("");
    const [preview, setPreview] = useState<string>("");

    const inputImageRef = useRef<HTMLInputElement>(null);

    const handleChange = (evt : React.ChangeEvent<HTMLInputElement>) => {
        const file : File | null = evt.target.files?.[0] || null;

        setFileName(file ? file.name : "");
        console.log("handleChange triggered:", fileName);
    };

    useEffect(() => {
        if(fileName !== "") {
            const file : File | null = inputImageRef.current?.files?.[0] || null;
            setPreview(file ? URL.createObjectURL(file) : "");
            console.log("File selected:", fileName);
        }
    }, [fileName]);

    return {fileName, preview, inputImageRef, handleChange};
}