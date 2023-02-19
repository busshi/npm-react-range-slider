![publish](https://github.com/busshi/npm-react-range-slider/actions/workflows/publish-npm.yml/badge.svg)

# React-Range-Slider

A custom React Range Slider component reusable without extra dependency (only React dependencies).

## Installation

`yarn add @busshi/react-range-slider` or `npm install @busshi/react-range-slider`

## Custom range slider properties

| Props    | Type                                             | Default value | Required / Optional |
| :------- | :----------------------------------------------- | :------------ | :------------------ |
| value    | number                                           |               | required            |
| onChange | (e: React.ChangeEvent<HTMLInputElement>) => void |               | required            |
| min      | number                                           | 0             | optional            |
| max      | number                                           | 100           | optional            |
| step     | number                                           | 5             | optional            |

## Custom style properties

| Props         | Type   | Default value | Required / Optional |
| :------------ | :----- | :------------ | :------------------ |
| width         | string | 100px         | optional            |
| height        | string | 3px           | optional            |
| borderRadius  | string | 50%           | optional            |
| background    | string | #eee          | optional            |
| dotColor      | string | #306FDB       | optional            |
| dotSize       | string | 12px          | optional            |
| activeDotSize | string | 15px          | optional            |

## Note

Colors can be passed as prop as hex (#FFF), rgb (rgb(255, 255, 255)) or as noun (white).

## Usage

```js
import RangeSlider from "@busshi/react-range-slider";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  return (
    <RangeSlider
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(+e.target.value);
      }}
      min={0}
      max={100}
      step={5}
      value={value}
      width="100px"
      height="3px"
      borderRadius="50%"
      background="#eee"
      dotColor="#306FDB"
      dotSize="12px"
      activeDotSize="15px"
    />
  );
}

export default App;
```
