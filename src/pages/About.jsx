import { Box } from '@mui/material';
import PageTemplate from '../components/PageTemplate';
import ClubHistory from '../components/ClubHistory';

function About() {
  return (
    <PageTemplate>
      <Box sx={{ backgroundColor: '#0A0A0A' }}>
        <ClubHistory />
      </Box>
    </PageTemplate>
  );
}

export default About;
