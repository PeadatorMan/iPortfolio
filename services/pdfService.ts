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
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    // Scale to fit width
    const ratio = pdfWidth / imgWidth;
    const imgFinalHeight = imgHeight * ratio;

    let heightLeft = imgFinalHeight;
    let position = 0;

    // Add first page
    pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgFinalHeight);
    heightLeft -= pdfHeight;

    // Add additional pages if needed
    while (heightLeft > 0) {
        position -= pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgFinalHeight);
        heightLeft -= pdfHeight;
    }

    pdf.save(filename);
};
