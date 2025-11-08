import InputImage from '@/components/inputImage';
import ImagePreview from '@/components/imageView';
import {useImage} from '@/hooks/useImage';
import { getTextFromImage } from './services/getText';

function App() {
  const {fileName, preview, inputImageRef, handleChange} = useImage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
      <div className="w-full max-w-2xl bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-semibold mb-6">Hello React</h1>
        <InputImage fileName={fileName} inputImageRef={inputImageRef} handleChange={handleChange} />
        <ImagePreview fileName={fileName} preview={preview} />
      </div>
      <div>
        <button onClick={() => getTextFromImage(inputImageRef.current?.files?.[0])}>Extraer texto</button>
      </div>
    </div>
  )
}

export default App
