import React, { useRef } from 'react';

function ScrollableContainer() {
    // Create a reference to the container element
    const containerRef = useRef(null);

    // Function to handle scrolling to the left
    const scrollLeft = () => {
        const container = containerRef.current;
        // Scroll to the left by a specified amount (e.g., 100px)
        container.scrollLeft -= 100;
    };

    // Function to handle scrolling to the right
    const scrollRight = () => {
        const container = containerRef.current;
        // Scroll to the right by a specified amount (e.g., 100px)
        container.scrollLeft += 100;
    };

    return (
        <div style={styles.wrapper}>
            {/* Left button for scrolling left */}
            <button style={styles.button} onClick={scrollLeft}>
                &lt;
            </button>

            {/* Scrollable container */}
            <div
                ref={containerRef}
                style={styles.container}
            >
                {/* Add content to the scrollable container */}
                <div style={styles.content}>
                    {/* Add multiple elements to scroll */}
                    <div style={styles.item}>Item 1</div>
                    <div style={styles.item}>Item 2</div>
                    <div style={styles.item}>Item 3</div>
                    <div style={styles.item}>Item 4</div>
                    <div style={styles.item}>Item 5</div>
                    <div style={styles.item}>Item 6</div>
                </div>
            </div>

            {/* Right button for scrolling right */}
            <button style={styles.button} onClick={scrollRight}>
                &gt;
            </button>
        </div>
    );
}

const styles = {
    wrapper: {
        display: 'flex', // Wrap container and buttons in a flex container
        alignItems: 'center',
    },
    container: {
        width: '300px',
        height: '100px',
        overflowX: 'auto', // Enable horizontal scrolling
        overflowY: 'hidden', // Hide vertical scrolling (optional)
        border: '1px solid #ccc',
        whiteSpace: 'nowrap', // Prevent wrapping of content
    },
    content: {
        display: 'flex', // Use flexbox to arrange items horizontally
        height: '100%',
    },
    item: {
        width: '100px',
        height: '100px',
        backgroundColor: '#eee',
        margin: '0 5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: '10px',
        margin: '5px',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: '#ccc',
        borderRadius: '5px',
    },
};

export default ScrollableContainer;
