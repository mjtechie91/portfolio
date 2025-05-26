

export const handleCVDownload = () => {
    const link = document.createElement('a');
    link.href = '/resources/MahendraJella_CV.pdf';
    // link.download = 'MahendraJella_CV.pdf';
    link.click();
  }