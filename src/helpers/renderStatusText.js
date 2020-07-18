import consts from "../consts";

function renderDocumentTitle(started, progress, complete) {
  if (complete) return consts.UPLOAD_COMPLETE;
  if (started) return consts.UPLOADING;
  if (progress < 100 && progress > 0) return consts.RESUME_UPLOAD;
  return consts.READY_TO_UPLOAD;
}

export default renderDocumentTitle