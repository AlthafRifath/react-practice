import { useState, useEffect } from 'react';

function MyComponent() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log('Event Listener Added');

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('Event Listener Removed');
        }
    }, []);

    useEffect(() => {
        document.title = `Width: ${width} x Height: ${height}`;
    }, [width, height]);

    return(<div>
        <h1>Window Size</h1>
        <p>Width: {width}px</p>
        <p>Height: {height}px</p>

    </div>)
}

export default MyComponent;