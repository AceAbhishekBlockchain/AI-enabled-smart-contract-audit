import React, { useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { UploadCloud, Cpu, ShieldCheck } from 'lucide-react';

const UploadCodeTab = ({ contractCode, setContractCode, fileName, setFileName, handleAudit, isLoading }) => {
  
  const handleFileUpload = useCallback((event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        setContractCode(e.target.result);
        toast({
          title: "File Uploaded!",
          description: `${file.name} has been successfully loaded.`,
        });
      };
      reader.readAsText(file);
    }
  }, [setContractCode, setFileName]);

  return (
    <Card className="bg-white/5 backdrop-blur-md border-white/10 shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 flex items-center gap-2">
          <UploadCloud size={28} /> Upload Your Smart Contract Code
        </CardTitle>
        <CardDescription className="text-gray-300 text-lg">
          Paste your Solidity code below or upload a .sol file.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Input 
            type="file" 
            accept=".sol" 
            onChange={handleFileUpload} 
            className="bg-white/10 border-white/20 text-gray-200 file:text-purple-300 file:bg-purple-900/50 hover:file:bg-purple-800/60"
          />
          {fileName && <p className="text-sm text-gray-400 mt-2">Uploaded: {fileName}</p>}
        </div>
        <Textarea
          placeholder="Or paste your Solidity code here..."
          value={contractCode}
          onChange={(e) => {
            setContractCode(e.target.value);
            if(fileName) setFileName(''); 
          }}
          rows={15}
          className="bg-slate-800 border-slate-700 text-gray-200 focus:ring-purple-500 focus:border-purple-500 font-mono text-sm"
        />
        <Button onClick={handleAudit} disabled={isLoading} className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-lg px-8 py-6 shadow-lg disabled:opacity-70">
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Cpu size={20} className="mr-2 animate-spin" /> Auditing Code... Please Wait
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <ShieldCheck size={20} className="mr-2" /> Start AI Audit from Code
            </div>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default UploadCodeTab;