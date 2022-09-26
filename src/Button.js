function ToolBar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export default function TestButtonToolBar() {
  function handleUploadBtnClick() {
    alert("upload");
    console.log("upload");
  }
  function handlePlayBtnClick() {
    console.log("play");
    alert("play");
  }

  return (
    <>
      <ToolBar
        onUploadImage={handleUploadBtnClick}
        onPlayMovie={handlePlayBtnClick}
      />
    </>
  );
}
