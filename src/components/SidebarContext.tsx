import React, { createContext, useContext, useState } from 'react';

interface SidebarContextType {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;

    selectedCurrency: string | null;
    setSelectedCurrency: (currency: string | null) => void;
    
    conversionAmount: number;
    setConversionAmount: (amount: number) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);
    const [conversionAmount, setConversionAmount] = useState<number>(0);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const contextValue: SidebarContextType = {
        isSidebarOpen,
        toggleSidebar,

        selectedCurrency,
        setSelectedCurrency,
        
        conversionAmount,
        setConversionAmount,
    };

    return (
        <SidebarContext.Provider value={contextValue}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
};
