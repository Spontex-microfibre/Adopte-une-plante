import { ClipLoader } from 'react-spinners'; // Choisir le spinner que tu veux
import { ILoaderProps } from './Loader.props';
import { CSSProperties } from 'react';
import "./Loader.css"

export const Loader: React.FC<ILoaderProps> = ({loading, color = "#2c9765", size=100, paddingTop}) => {
    
    //cf. doc de react-spinners
    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        translate: "0 "+paddingTop
      }

    return <ClipLoader size={size} cssOverride={override} color={color} loading={loading} aria-label="Indicateur de chargement" />
}