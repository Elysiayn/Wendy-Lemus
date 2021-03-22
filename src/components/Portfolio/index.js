import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Photos from '../Photos';

function Portfolio ({ currentCategory }) {
    const { name, description } = currentCategory;

    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <Photos category={currentCategory.name} />
        </section>
    )
}

export default Portfolio