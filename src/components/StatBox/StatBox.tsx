import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { FC, ReactNode } from 'react';
import ProgressCircle from '../ProgressCircle/ProgressCircle';

interface Props {
  title: string;
  subtitle: string;
  icon: ReactNode;
  progress: string;
  increase: any;
}

const StatBox: FC<Props> = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width='100%' m='0 30px'>
      <Box display='flex' justifyContent='space-between'>
        <Box>
          {icon}
          <Typography
            variant='h4'
            fontWeight='bold'
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display='flex' justifyContent='space-between' mt='2px'>
        <Typography variant='h5' sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant='h5'
          fontStyle='italic'
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
