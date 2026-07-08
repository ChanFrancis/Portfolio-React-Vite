import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import type { Project } from '../../../types'

interface ProjectsGalleryProps {
    projects: Project[];
    images: string[];
    onSelect: (index: number) => void;
    onClose: () => void;
}

/*  Modal gallery of every project. Rendered through a portal into document.body so it
    escapes the transformed section stacking contexts and covers the whole viewport.
    Clicking a card selects that project (by its index in the data array) and closes. */
function ProjectsGallery({ projects, images, onSelect, onClose }: ProjectsGalleryProps) {

    // First image of a project = first asset whose filename contains the title.
    const firstImageFor = (title: string) => images.find((img) => img.includes(title));

    // Close on Escape.
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose]);

    return createPortal(
        <div className='galleryOverlay' onClick={onClose}>
            <div className='galleryModal' onClick={(e) => e.stopPropagation()}>
                <button className='galleryClose' onClick={onClose} aria-label="Close">&times;</button>
                <h2 className='galleryHeading'>All projects ({projects.length})</h2>

                <div className='galleryGrid'>
                    {projects.map((project, index) => {
                        const bg = firstImageFor(project.title);
                        const stacks = project.stacks.split(',');
                        return (
                            <div
                                className='galleryCard'
                                key={project.id}
                                onClick={() => onSelect(index)}
                            >
                                <div
                                    className='galleryCardBg'
                                    style={bg ? { backgroundImage: `url(${bg})` } : undefined}
                                ></div>
                                <div className='galleryCardContent'>
                                    <span className='galleryCardTitle'>
                                        {project.title.replace(/_/g, ' ')}
                                    </span>
                                    <div className='galleryCardLogos'>
                                        {stacks.map((stack, key) => (
                                            <img
                                                key={key}
                                                src={`/${stack}.png`}
                                                alt={stack}
                                                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>,
        document.body
    );
}

export default ProjectsGallery
