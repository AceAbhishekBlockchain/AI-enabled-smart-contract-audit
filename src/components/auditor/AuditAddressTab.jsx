import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link as LinkIcon, Cpu, ShieldCheck } from 'lucide-react';

const AuditAddressTab = ({ contractAddress, setContractAddress, handleAudit, isLoading }) => {
  return (
    <Card className="bg-white/5 backdrop-blur-md border-white/10 shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500 flex items-center gap-2">
          <LinkIcon size={28} /> Audit Smart Contract by Address
        </CardTitle>
        <CardDescription className="text-gray-300 text-lg">
          Enter the deployed smart contract address (e.g., on Ethereum mainnet or testnets).
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Input 
          type="text" 
          placeholder="0x..."
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value)}
          className="bg-slate-800 border-slate-700 text-gray-200 focus:ring-cyan-500 focus:border-cyan-500 font-mono text-sm"
        />
        <Button onClick={handleAudit} disabled={isLoading} className="w-full bg-gradient-to-r from-sky-500 to-cyan-600 hover:from-sky-600 hover:to-cyan-700 text-lg px-8 py-6 shadow-lg disabled:opacity-70">
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Cpu size={20} className="mr-2 animate-spin" /> Auditing Address... Please Wait
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <ShieldCheck size={20} className="mr-2" /> Start AI Audit from Address
            </div>
          )}
        </Button>
        <p className="text-sm text-gray-400">
          Note: Auditing by address typically involves fetching the deployed bytecode and, if available, verified source code from block explorers. The depth of analysis may vary.
        </p>
      </CardContent>
    </Card>
  );
};

export default AuditAddressTab;