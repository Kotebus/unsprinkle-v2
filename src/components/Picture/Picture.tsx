const Picture = ({ src, alt, imgTag }) => {
    const ImgTag = imgTag;
    return (
        <picture>
            <source
                type="image/avif"
                srcSet={`
                      ${src}.avif 1x,
                      ${src}@2x.avif 2x,
                      ${src}@3x.avif 3x
                    `}
            />
            <source
                type="image/jpg"
                srcSet={`
                        ${src}.jpg 1x,
                        ${src}.jpg 2x,
                        ${src}.jpg 3x
                    `}
            />
            <ImgTag
                alt={alt}
                src={`${src}.jpg`}
            />
        </picture>
    );
}

export default Picture;