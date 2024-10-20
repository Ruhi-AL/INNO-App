{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let reverse = false;\
\
function convert() \{\
    let value = parseFloat(document.getElementById("inputValue").value);\
    let unitType = document.getElementById("unitType").value;\
    let result;\
\
    if (isNaN(value)) \{\
        document.getElementById("result").innerText = "Please enter a valid number.";\
        return;\
    \}\
\
    if (!reverse) \{\
        switch(unitType) \{\
            case "meters":\
                result = value * 3.28084 + " feet";\
                break;\
            case "kilometers":\
                result = value * 0.621371 + " miles";\
                break;\
            case "kilograms":\
                result = value * 2.20462 + " pounds";\
                break;\
            case "liters":\
                result = value * 0.264172 + " gallons";\
                break;\
            default:\
                result = "Invalid input";\
        \}\
    \} else \{\
        switch(unitType) \{\
            case "meters":\
                result = value / 3.28084 + " meters";\
                break;\
            case "kilometers":\
                result = value / 0.621371 + " kilometers";\
                break;\
            case "kilograms":\
                result = value / 2.20462 + " kilograms";\
                break;\
            case "liters":\
                result = value / 0.264172 + " liters";\
                break;\
            default:\
                result = "Invalid input";\
        \}\
    \}\
\
    document.getElementById("result").innerText = result;\
\}\
\
function reverseConversion() \{\
    reverse = !reverse;\
    if (reverse) \{\
        document.getElementById("reverse-btn").innerText = "Switch to Metric to Imperial";\
    \} else \{\
        document.getElementById("reverse-btn").innerText = "Switch to Imperial to Metric";\
    \}\
\}\
}
