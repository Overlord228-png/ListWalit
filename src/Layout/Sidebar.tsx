import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSidebar } from '../components/SidebarContext';

const Sidebar: React.FC = () => {
    const { isSidebarOpen, toggleSidebar, selectedCurrency, conversionAmount, setConversionAmount } = useSidebar();
    const [conversionRate, setConversionRate] = useState<number | null>(null);

    useEffect(() => {
        if (selectedCurrency) {
            axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&valcode=${selectedCurrency}`)
                .then(response => {
                    const rate = response.data[0].rate;
                    setConversionRate(rate);
                })
                .catch(error => {
                    console.error('Error fetching conversion rate:', error);
                });
        }
    }, [selectedCurrency]);

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const amount = parseFloat(e.target.value);
        setConversionAmount(isNaN(amount) ? 0 : amount);
    };

    return (
        <div className={
            `fixed top-0 right-0 w-64 h-full bg-gray-800/30 bg-opacity-75 backdrop-filter backdrop-blur-md text-white transform 
            ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} 
            transition-transform duration-300 ease-in-out`
            }>
            <div className="p-4">
                <button onClick={toggleSidebar} className="text-white focus:outline-none mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                {selectedCurrency ? (
                    <>
                        <p className='text-black'>{selectedCurrency}</p>
                        <div className="flex items-center mt-2">
                            <input
                                type="number"
                                value={conversionAmount}
                                onChange={handleAmountChange}
                                placeholder={`Введите сумму в ${selectedCurrency}`}
                                className="bg-blac-200 p-2 rounded mr-2"
                            />
                            {conversionRate !== null && conversionAmount && <span>= {conversionAmount * conversionRate} UAH</span>}
                        </div>
                    </>
                ) : (
                    <>
                        <p>Конвертация в гривну</p>
                        <div className="flex items-center mt-2">
                            <input
                                type="number"
                                value={conversionAmount}
                                onChange={handleAmountChange}
                                placeholder="Введите сумму"
                                className="bg-gray-200 p-2 rounded mr-2"
                            />
                            {conversionRate !== null && conversionAmount && <span>= {conversionAmount * conversionRate} UAH</span>}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
