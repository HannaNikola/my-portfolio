

"use client";

export const ButtonLoadCV = () => {

    const handleDownload = () => {
        
        const link = document.createElement('a');
        link.href = '/images/CV Full stack developer.pdf'; 
        link.download = 'CV Full stack developer.pdf';
        link.click();
    };

    return (
        <div>
            <button onClick={handleDownload} className="mb-24 py-2 px-6 button-styles">
                Download CV
            </button>
        </div>
    );
};