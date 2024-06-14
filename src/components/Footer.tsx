import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 py-4">
            <div className="container mx-auto flex flex-col items-center">
                <p className="text-center text-white mb-2">© 2024 Конвертер валют. Все права защищены.</p>
                <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-gray-400">Политика конфиденциальности</a>
                    <a href="#" className="text-white hover:text-gray-400">Условия использования</a>
                    <a href="#" className="text-white hover:text-gray-400">Контакты</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
