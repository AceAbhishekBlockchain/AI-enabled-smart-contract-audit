import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const PDFGeneratorComponent = ({ title, content, filename }) => {
  const generatePDF = async () => {
    try {
      const { jsPDF } = await import('jspdf');
      
      const doc = new jsPDF();
      
      doc.setFontSize(20);
      doc.setFont(undefined, 'bold');
      doc.text(title, 20, 30);
      
      doc.setFontSize(12);
      doc.setFont(undefined, 'normal');
      
      const lines = content.split('\n');
      let yPosition = 50;
      
      lines.forEach((line) => {
        if (yPosition > 280) {
          doc.addPage();
          yPosition = 20;
        }
        
        const splitText = doc.splitTextToSize(line, 170);
        doc.text(splitText, 20, yPosition);
        yPosition += splitText.length * 7;
      });
      
      doc.save(filename);
      
      toast({
        title: "PDF Generated!",
        description: "Your report has been downloaded successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button onClick={generatePDF} className="flex items-center space-x-2">
      <Download size={16} />
      <span>Download PDF Report</span>
    </Button>
  );
};

export { PDFGeneratorComponent as PDFGenerator };