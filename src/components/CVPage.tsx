import { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import React from 'react';

const CVPage = () => {
    const [openSections, setOpenSections] = useState({
      os: false,
      devops: false,
      general: false,
      programming: false,
      projects: false,
    });
  
    type SectionKeys = "os" | "devops" | "general" | "programming" | "projects";
  
    const toggleSection = (section: SectionKeys) => {
      setOpenSections(prev => ({
        ...prev,
        [section]: !prev[section]
      }));
    };
  
    return (
      <div className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-[url('/src/assets/background.webp')] bg-cover bg-center flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4">William Ghazarian</h1>
          <p className="text-xl text-gray-300">Développeur & Admin Système</p>
        </div>
      </div>
  
        {/* Main Content */}
        <div className="w-full mx-auto px-4 py-12">

          {/* Compétences Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-purple-400">Mes compétences</h2>
            
            {/* OS Section */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('os')}
                className="w-full flex items-center justify-between bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <span className="text-xl font-semibold">OS</span>
                {openSections.os ? (
                  <ChevronUpIcon className="h-6 w-6" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6" />
                )}
              </button>
              {openSections.os && (
                <div className="mt-4 ml-6 space-y-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-400 mb-2">Linux</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      <li>Arch Linux - Daily driver depuis 2010</li>
                      <li>Manjaro - Familier avec les systèmes similaires à Arch</li>
                      <li>Debian - Administration système et troubleshooting</li>
                      <li>Rocky - Administration système et troubleshooting</li>
                      <li>Ubuntu - Administration système et troubleshooting</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-400 mb-2">Windows</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      <li>Administration système</li>
                      <li>Windows Server - Comprehension des services, mise en place d'une forêt en VM</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
  
            {/* Dev-Ops Section */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('devops')}
                className="w-full flex items-center justify-between bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <span className="text-xl font-semibold">Dev-Ops</span>
                {openSections.devops ? (
                  <ChevronUpIcon className="h-6 w-6" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6" />
                )}
              </button>
              {openSections.devops && (
                <div className="mt-4 ml-6 bg-gray-800 p-4 rounded-lg">
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Virtualisation KVM, Hyper-V, VM Ware</li>
                    <li>Ansible</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                  </ul>
                </div>
              )}
            </div>
  
            {/* General IT Section */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('general')}
                className="w-full flex items-center justify-between bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <span className="text-xl font-semibold">Informatique générale</span>
                {openSections.general ? (
                  <ChevronUpIcon className="h-6 w-6" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6" />
                )}
              </button>
              {openSections.general && (
                <div className="mt-4 ml-6 bg-gray-800 p-4 rounded-lg">
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Utilisation habituelle des terminaux</li>
                    <li>Installation de logiciels depuis la source et utilisation de Git</li>
                    <li>Utilisation de SSH</li>
                    <li>Sensible à la sécurité des systèmes</li>
                    <li>Bases sur GIMP</li>
                    <li>Libre Office Writer, Calc et Base</li>
                  </ul>
                </div>
              )}
            </div>
  
            {/* Programming Section */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('programming')}
                className="w-full flex items-center justify-between bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <span className="text-xl font-semibold">Programmation</span>
                {openSections.programming ? (
                  <ChevronUpIcon className="h-6 w-6" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6" />
                )}
              </button>
              {openSections.programming && (
                <div className="mt-4 ml-6 bg-gray-800 p-4 rounded-lg">
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Bash</li>
                    <li>Java</li>
                    <li>C#</li>
                    <li>SQL</li>
                  </ul>
                </div>
              )}
            </div>
          </section>
  
          {/* Projects Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-purple-400">Mes projets</h2>
            <button
              onClick={() => toggleSection('projects')}
              className="w-full flex items-center justify-between bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <span className="text-xl font-semibold">Projets en cours</span>
              {openSections.projects ? (
                <ChevronUpIcon className="h-6 w-6" />
              ) : (
                <ChevronDownIcon className="h-6 w-6" />
              )}
            </button>
            {openSections.projects && (
              <div className="mt-4 ml-6 bg-gray-800 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Shell scripts</li>
                  <li>Je veux faire une page web pour ludifier l'écriture</li>
                  <li>Je vais faire un programme similaire à Firefox Pocket mais plus adapté à mes besoins.</li>
                  <li>Je suis en train de travailler sur un jeu vidéo de marchandage dans l'espace.</li>
                  <li>Et bien d'autres choses encore.</li>
                </ul>
              </div>
            )}
          </section>
  
          {/* Contact Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-purple-400">Me contacter</h2>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="space-y-4 text-gray-300">
                <p>Email : <a href="mailto:ghazarian.w@proton.me" className="text-purple-400 hover:text-purple-300">ghazarian.w@proton.me</a></p>
                <p>GitHub : <a href="https://github.com/ghazarian-w" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">ghazarian-w</a></p>
              </div>
            </div>
          </section>
  
          {/* Footer */}
          <footer className="text-center text-gray-400 mt-16">
            <p>Copyleft | William Ghazarian 2024 | No rights reserved</p>
          </footer>
        </div>
      </div>
    );
  };

export default CVPage;
