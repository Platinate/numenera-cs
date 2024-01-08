import React from 'react';
import { Button } from 'antd';

interface IProps {
    onDataLoaded: (data:string) => void;
}

const JsonFileLoader: React.FC<IProps> = ({onDataLoaded}) => {

    const handleFileRead = (event: ProgressEvent<FileReader>) => {
        const content = event.target!.result;
        try {
            onDataLoaded(content as string);
        } catch (error) {
            console.error('Erreur lors de la lecture du fichier JSON:', error);
        }
    };

    const handleFileChosen = (file: Blob) => {
        const fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    };

    return (
        <div>
            <input
                type='file'
                accept='.json'
                onChange={e => handleFileChosen(e.target.files![0])}
                style={{ display: 'none' }}
                id='fileInput'
            />
            <label htmlFor='fileInput'>
                <Button type="primary" onClick={() => document.getElementById('fileInput')!.click()}>
                    Charger
                </Button>
            </label>
        </div>
    );
};

export default JsonFileLoader;
