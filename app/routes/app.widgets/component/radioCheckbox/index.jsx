import React, { useState, useCallback } from "react";
import { Box, Card, Text, RadioButton } from "@shopify/polaris";

export default function HeadLayoutTemplate(
    {
        selectedOption,
        imageSrc,
        handleChange,
    }
) {
    return (
        <div>
            <Text as="h2" variant="headingSm">
                Head layout
            </Text>
            <div className="flex flex-row">
                <Box paddingBlock="200" width="50%">
                    <img
                        width="123"
                        height="40"
                        src={imageSrc.regular}
                        alt="regular"
                        onClick={() => handleChange("regular")}
                        className="cursor-pointer"
                    />
                    <RadioButton
                        label="Regular"
                        id="regular"
                        name="headLayout"
                        checked={selectedOption === "regular"}
                        onChange={() => handleChange("regular")}
                    />
                </Box>
                <Box paddingBlockStart="200" width="50%">
                    <img
                        width="123"
                        height="40"
                        src={imageSrc.streamlined}
                        alt="Streamlined"
                        onClick={() => handleChange("streamlined")}
                        className="cursor-pointer"
                    />
                    <RadioButton
                        label="Streamlined"
                        id="streamlined"
                        name="headLayout"
                        checked={selectedOption === "streamlined"}
                        onChange={() => handleChange("streamlined")}
                    />
                </Box>
            </div>
        </div>
    );
}
