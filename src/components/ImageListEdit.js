import { useState } from "react";
import ImageCard from "./ImageCard";

const ImageListEdit = ({ files }) => {

    const [selFile, setSelFile] = useState();
    const [msg, setMsg] = useState();

    const handleClick = (e, f) => {
        setSelFile(f);
    };

    return (
        <>
            <div id="imgList">
                {
                    files.map((f, i) => <ImageCard file={f} key={i}
                        handler={e => handleClick(e, f)}
                        width={150}
                    />)
                }
            </div>
            <div id="selImg">
                {selFile && <div> <h2>Imagen seleccionada</h2>

                    <input onChange={(e) => setMsg(e.target.value)} placeholder='Introduzca un mensaje'></input>

                    <figure id="exportar" className="figure w-50 m-auto d-block position-relative figure2">
                        <p className="w-100 px-30 text-center position-absolute start-30 h1">{msg}</p>
                        <ImageCard file={selFile} />
                    </figure>

                </div>}
            </div>
        </>
    )
}

export default ImageListEdit;