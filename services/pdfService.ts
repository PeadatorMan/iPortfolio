import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

interface GeneratePDFOptions {
    elementId: string;
    filename: string;
}

export const generatePDF = async ({ elementId, filename }: GeneratePDFOptions): Promise<void> => {
    const input = document.getElementById(elementId);
    if (!input) {
        throw new Error(`Element with id '${elementId}' not found`);
    }

    const canvas = await html2canvas(input, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/png');

    // Load favicon image
    const faviconImg = new Image();
    faviconImg.src = '/img/favicon.png';
    await new Promise((resolve) => {
        faviconImg.onload = resolve;
        faviconImg.onerror = resolve;
    });

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    // Scale to fit width
    const ratio = pdfWidth / imgWidth;
    const imgFinalHeight = imgHeight * ratio;

    const footerHeight = 10; // Reserve 20mm for footer at the bottom
    const usableHeight = pdfHeight - footerHeight;
    const totalPages = Math.ceil(imgFinalHeight / usableHeight);

    const addFooter = () => {
        // Draw a white rectangle to cover any image overlapping the footer section
        pdf.setFillColor(255, 255, 255);
        pdf.rect(0, usableHeight, pdfWidth, footerHeight, 'F');

        // Draw a line at the top of the footer section
        pdf.setDrawColor(200, 200, 200); // Light gray
        pdf.setLineWidth(0.2);
        pdf.line(10, usableHeight, pdfWidth - 10, usableHeight);

        const footerText = "BlackBUNNY Dev";
        const footerY = pdfHeight - 5;

        pdf.setFontSize(10);
        pdf.setTextColor(128, 128, 128); // Gray color

        // Approximate width if getTextWidth is missing, but it should be available
        const textWidth = typeof pdf.getTextWidth === 'function'
            ? pdf.getTextWidth(footerText)
            : pdf.getStringUnitWidth(footerText) * pdf.getFontSize() / pdf.internal.scaleFactor;

        const logoSize = 5;
        const margin = 2;
        const totalContentWidth = logoSize + margin + textWidth;

        // Align to the right, 10mm from the right edge
        const startX = pdfWidth - 10 - totalContentWidth;

        try {
            if (faviconImg.complete && faviconImg.naturalHeight !== 0) {
                // Add image before text
                pdf.addImage(faviconImg, 'PNG', startX, footerY - logoSize + 1, logoSize, logoSize);
                pdf.text(footerText, startX + logoSize + margin, footerY);
            } else {
                // Fallback if image fails to load
                pdf.text(footerText, pdfWidth - 5 - textWidth, footerY);
            }
        } catch (e) {
            pdf.text(footerText, pdfWidth - 5 - textWidth, footerY);
        }
    };

    // Generate pages iteratively based on calculated total pages
    for (let i = 1; i <= totalPages; i++) {
        if (i > 1) {
            pdf.addPage();
        }
        // Offset the image so each page displays the next slice of usableHeight
        const position = -(i - 1) * usableHeight;
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgFinalHeight);
        addFooter();
    }

    pdf.save(filename);
};
