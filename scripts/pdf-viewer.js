var viewerConfig = {
  embedMode: "SIZED_CONTAINER",
};

/* Wait for Adobe Document Services PDF Embed API to be ready */
document.addEventListener("adobe_dc_view_sdk.ready", function () {
  /* Initialize the AdobeDC View object */
  var adobeDCView = new AdobeDC.View({
    /* Pass your registered client id */
    clientId: "f1df2b6432ca4737ab20f787375e47f1",
    /* Pass the div id in which PDF should be rendered */
    divId: "pdf-viewer",
  });

  /* Invoke the file preview API on Adobe DC View object */
  adobeDCView.previewFile(
    {
      /* Pass information on how to access the file */
      content: {
        /* Location of file where it is hosted */
        location: {
          url: "https://res.cloudinary.com/sivadass/image/upload/v1672850792/resume/Sivadass-Resume.pdf",
          /*
              If the file URL requires some additional headers, then it can be passed as follows:-
              header: [
                  {
                      key: "<HEADER_KEY>",
                      value: "<HEADER_VALUE>",
                  }
              ]
              */
        },
      },
      /* Pass meta data of file */
      metaData: {
        /* file name */
        fileName: "Sivadass Resume",
      },
    },
    viewerConfig
  );
});
