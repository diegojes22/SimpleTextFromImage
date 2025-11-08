import '@/css/image-manager.css';

type Props = {
    fileName: string;
    preview: string;
}

export default function ImagePreview({fileName, preview}: Props) {
    return (
        <div className="input-image-component">
            {
                (preview === "") ? 
                    <p className="image-text">No hay imagen seleccionada</p> : 
                    <img src={preview} alt={fileName} className="image-preview"/>
            }
        </div>
    );
}