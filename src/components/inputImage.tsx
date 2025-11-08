import '@/css/image-manager.css';

type Props = {
    fileName: string | null;
    inputImageRef: React.RefObject<HTMLInputElement | null>;
    handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputImage({fileName, inputImageRef, handleChange} : Props) {
    return (
        <div className="input-image-component">
            <div>
                <label className="w-full flex flex-col items-center p-6 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-white transition">
                    <input ref={inputImageRef} type="file" accept="image/*" className="hidden" onChange={handleChange} />
                    <svg className="w-10 h-10 mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
                    </svg>
                    <span className="text-sm text-gray-300">Haz clic o arrastra una imagen aquí</span>
                    <span className="mt-2 text-xs text-gray-500">PNG, JPG, GIF hasta 10MB</span>
                </label>
                {
                    fileName !== null ? 
                        (<p className="image-text">Archivo seleccionado: {fileName}</p>) : 
                        (<></>)
                }
            </div>
        </div>
    )
}