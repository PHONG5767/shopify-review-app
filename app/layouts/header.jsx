import { Button, Popover, ActionList } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import { useNavigate } from "@remix-run/react";

const Header = () => {

    const navigate = useNavigate();

    const handleNavigation = (url) => {
        togglePopoverActive()
        navigate(url);
    };

    const [popoverActive, setPopoverActive] = useState(false);
    const [popoverActiveMobile, setPopoverActiveMobile] = useState(false);

    const togglePopoverActive = useCallback(
        () => setPopoverActive((popoverActive) => !popoverActive),
        [],
    );
    const togglePopoverActiveMobile = useCallback(
        () => setPopoverActiveMobile((popoverActiveMobile) => !popoverActiveMobile),
        [],
    );

    const activator = (
        <button
            onClick={togglePopoverActive}
            type="button" className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            Widget
            <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
        </button>
    );

    const activatorMobile = (
        <button
            onClick={togglePopoverActiveMobile}
            type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
    );

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:hidden">
                    <Popover
                        active={popoverActiveMobile}
                        activator={activatorMobile}
                        autofocusTarget="first-node"
                        onClose={togglePopoverActiveMobile}
                    >
                        
                            <div className="fixed inset-y-0 right-0 z-10 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                                <div className="flex items-center justify-between">
                                    <a href="#" className="-m-1.5 p-1.5">
                                        <span className="sr-only">Your Company</span>
                                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                                    </a>
                                    <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={togglePopoverActiveMobile}>
                                        <span className="sr-only">Close menu</span>
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="mt-6 flow-root">
                                    <div className="-my-6 divide-y divide-gray-500/10">
                                        <div className="space-y-2 py-6">
                                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Widget</a>
                                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Review</a>
                                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Order</a>
                                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Import</a>
                                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Setting</a>
                                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">AI-Neutral</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                      
                    </Popover>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Dashboard</a>
                    <div className="relative">
                        <Popover
                            active={popoverActive}
                            activator={activator}
                            autofocusTarget="first-node"
                            onClose={togglePopoverActive}
                        >

                            <div className="p-4">

                                <div onClick={() => handleNavigation("/a")} className="group relative flex items-center gap-x-6 cursor-pointer rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">

                                    <div className="flex-auto">
                                        <p className="block font-semibold text-gray-900">
                                            Analytics
                                            <span className="absolute inset-0"></span>
                                        </p>
                                    </div>
                                </div>
                                <div onClick={() => handleNavigation("/b")} className="group relative flex items-center gap-x-6 cursor-pointer rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">

                                    <div className="flex-auto">
                                        <p className="block font-semibold text-gray-900">
                                            Engagement
                                            <span className="absolute inset-0"></span>
                                        </p>                                        </div>
                                </div>
                                <div onClick={() => handleNavigation('/c')} className="group relative flex items-center gap-x-6 cursor-pointer rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">

                                    <div className="flex-auto">
                                        <p className="block font-semibold text-gray-900">
                                            Security
                                            <span className="absolute inset-0"></span>
                                        </p>
                                    </div>
                                </div>
                                <div onClick={() => handleNavigation('/d')} className="group relative flex items-center gap-x-6 cursor-pointer rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">

                                    <div className="flex-auto">
                                        <p className="block font-semibold text-gray-900">
                                            Integrations
                                            <span className="absolute inset-0"></span>
                                        </p>
                                    </div>
                                </div>
                                <div onClick={() => handleNavigation('/e')} className="group relative flex items-center gap-x-6 cursor-pointer rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">

                                    <div className="flex-auto">
                                        <p className="block font-semibold text-gray-900">
                                            Automations
                                            <span className="absolute inset-0"></span>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </Popover>
                    </div>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Review</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Order</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Import</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Setting</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">AI-Neutral</a>
                </div>
            </nav>


        </header>
    )

}
export default Header;