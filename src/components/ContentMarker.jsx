import React, { useState } from 'react';

function ContentMarker() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Вы кликнули {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми на меня
            </button>
        </div>
    )
}

export default ContentMarker;