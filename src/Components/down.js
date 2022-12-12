export const download = (name,blob)=>{
    const url = URL.createObjectURL(blob);
    const el = document.createElement("el");
    el.href = url;
    el.download = name|| "download";
    return url;
}