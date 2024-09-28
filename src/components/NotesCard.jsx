import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Trash from "../icons/Trash";

const Notecard = ({ note }) => {
    const textAreaRef = useRef(null);

    let position, colors, body;
    try {
        position = JSON.parse(note.position);
        colors = JSON.parse(note.colors);
        body = JSON.parse(note.body);
    } catch (e) {
        console.error("Failed to parse note properties", e);
        return null;
    }

    useEffect(() => {
        autoGrow(textAreaRef);
    }, []);

    const autoGrow = (textAreaRef) => {
        const { current } = textAreaRef;
        if (current) {
            current.style.height = "auto"; // Reset the height
            current.style.height = current.scrollHeight + "px"; // Set the new height
        }
    };


    return (
        <div 
            className="card"
            style={{
                backgroundColor: colors.colorBody,
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        >
            <div
                className="card-header"
                style={{ backgroundColor: colors.colorHeader }}
            >
                <Trash />
            </div>

            <div className="card-body">
                <textarea
                    ref={textAreaRef}
                    style={{ color: colors.colorText }}
                    defaultValue={body}
                    onInput={() => autoGrow(textAreaRef)}
                ></textarea>
            </div>
        </div>
    );
};

Notecard.propTypes = {
    note: PropTypes.shape({
        position: PropTypes.string.isRequired,
        colors: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    }).isRequired,
};

export default Notecard;