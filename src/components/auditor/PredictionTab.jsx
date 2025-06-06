import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, ShieldCheck, Cpu } from 'lucide-react';

const PredictionTab = ({ auditResults, isLoading }) => {
  const getSeverityColor = (impact) => {
    if (impact === 'High') return 'text-red-400';
    if (impact === 'Medium') return 'text-yellow-400';
    return 'text-green-400';
  };

  return (
    <Card className="bg-white/5 backdrop-blur-md border-white/10 shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 flex items-center gap-2">
          <Brain size={28} /> AI Vulnerability Prediction
        </CardTitle>
        <CardDescription className="text-gray-300 text-lg">
          Potential future risks and complex attack vectors identified by our AI.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading && <p className="text-center text-lg py-8 text-gray-300"><Cpu size={24} className="inline mr-2 animate-spin" /> Analyzing for predictive vulnerabilities...</p>}
        {!isLoading && !auditResults && <p className="text-center text-lg py-8 text-gray-400">Perform an audit first to see predictions.</p>}
        {auditResults && (
           <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-3 text-pink-300">Predicted Vulnerabilities ({auditResults.predictedVulnerabilities.length})</h3>
              {auditResults.predictedVulnerabilities.length === 0 && <p className="text-gray-300">AI predicts no significant complex vulnerabilities at this time.</p>}
              <div className="space-y-4">
                {auditResults.predictedVulnerabilities.map((pv, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700/70">
                    <CardHeader>
                      <CardTitle className={`text-lg ${getSeverityColor(pv.impact)} flex items-center gap-2`}>
                        <ShieldCheck size={20} /> {pv.type} (Impact: {pv.impact})
                      </CardTitle>
                      <CardDescription className="text-gray-400">Likelihood: {pv.likelihood}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{pv.notes}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-6">
                Note: Predictions are based on patterns and heuristics learned by the AI. They represent potential areas of concern that may require deeper manual investigation.
              </p>
           </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PredictionTab;