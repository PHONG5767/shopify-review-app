import { DropZone } from "@shopify/polaris"
export default function ImportFileModal(){
  return (
    <DropZone
    accept=".csv"
    errorOverlayText="File type must be .csv"
    type="file"
    onDrop={() => {}}
  >
    <DropZone.FileUpload />
  </DropZone>
  )
}