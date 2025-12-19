import React, { useEffect } from 'react';

type RepoLink = {
  label: string;
  url: string;
};

interface RepoLinksModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  primaryRepo?: string;
  links: RepoLink[];
}

const RepoLinksModal: React.FC<RepoLinksModalProps> = ({
  isOpen,
  onClose,
  title,
  primaryRepo,
  links
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const mergedLinks: RepoLink[] = [
    ...(primaryRepo ? [{ label: 'Dashboards Repo', url: primaryRepo }] : []),
    ...links
  ];

  const uniqueLinks = mergedLinks.filter(
    (link, index, arr) => arr.findIndex((l) => l.url === link.url) === index
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl mx-4 animate-zoom-in">
        <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Repositories
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                {title}
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="p-6">
            <div className="grid sm:grid-cols-2 gap-3">
              {uniqueLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {link.label}
                  </span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7m0 0v7m0-7L10 14m-1 0H7a4 4 0 00-4 4v2a2 2 0 002 2h2a4 4 0 004-4v-2" />
                  </svg>
                </a>
              ))}
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              Links open in a new tab.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoLinksModal;
