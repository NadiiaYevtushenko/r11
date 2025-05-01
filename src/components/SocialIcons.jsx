import React from 'react';

const SocialIcons = ({ icons }) => (
    <div className="absolute right-2 top-2/4 -translate-y-1/2 hidden sm:flex flex-col items-center gap-4">
        {icons.map((icon) => (
            <img
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                className="w-8 h-8 filter invert"
                loading="lazy"
            />
        ))}
    </div>
);

export default SocialIcons;
