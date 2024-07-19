
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import DirectionsIcon from '@mui/icons-material/Directions';

export const Overlay = () => {

    return <>
        <div id="colorControll">
            <div className="pallete">
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                        style={{
                            background: 'transparent',
                            boxShadow: 'none'
                        }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Command line"
                            inputProps={{ 'aria-label': 'search google maps' }}
                            onChange={e => console.log(e.target.value)}
                        />
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton 
                            color="primary" 
                            sx={{ p: '10px' }} 
                            aria-label="directions"
                            onClick={() => console.log('click')}
                        >
                            <DirectionsIcon />
                        </IconButton>
                    </Paper>
            </div>
        </div>
    </>
};