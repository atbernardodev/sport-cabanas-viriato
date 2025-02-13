import { Box, Typography, Card, Grid, Divider } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { motion } from 'framer-motion';

const StatBox = ({ label, value, color = '#2196F3' }) => (
  <Box sx={{ textAlign: 'center', px: 2 }}>
    <Typography variant="h5" sx={{ color, fontWeight: 'bold', lineHeight: 1 }}>
      {value}
    </Typography>
    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
      {label}
    </Typography>
  </Box>
);

const FormIndicator = ({ result }) => (
  <Box
    sx={{
      width: 24,
      height: 24,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:
        result === 'W' ? '#4CAF50' : result === 'D' ? '#FFA726' : '#f44336',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '0.7rem',
    }}
  >
    {result}
  </Box>
);

// Sample data - replace with actual data
const teamStats = {
  position: 3,
  points: 45,
  goalsScored: 38,
  goalsConceded: 15,
  matchesPlayed: 22,
  wins: 13,
  draws: 6,
  losses: 3,
};

function StandingsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        sx={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          borderRadius: '16px',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
          mb: 3,
        }}
      >
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
          {/* Position and Points */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              pr: 3,
              borderRight: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: 'rgba(255,255,255,0.15)',
                fontWeight: 900,
                lineHeight: 1,
                mr: 2,
              }}
            >
              {teamStats.position}º
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmojiEventsIcon sx={{ color: '#FFD700' }} />
                <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold' }}>
                  {teamStats.points}
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                pontos
              </Typography>
            </Box>
          </Box>

          {/* Stats */}
          <Box sx={{ display: 'flex', alignItems: 'center', px: 3, flex: 1 }}>
            <StatBox label="Vitórias" value={teamStats.wins} color="#4CAF50" />
            <StatBox label="Empates" value={teamStats.draws} color="#FFA726" />
            <StatBox label="Derrotas" value={teamStats.losses} color="#f44336" />
            <Divider orientation="vertical" sx={{ mx: 2, bgcolor: 'rgba(255,255,255,0.1)' }} />
            <StatBox
              label="Golos Marcados"
              value={teamStats.goalsScored}
              color="#2196F3"
            />
            <StatBox
              label="Golos Sofridos"
              value={teamStats.goalsConceded}
              color="#f44336"
            />
          </Box>

          {/* Form */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              pl: 3,
              borderLeft: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {['W', 'W', 'D', 'W', 'L'].map((result, index) => (
              <FormIndicator key={index} result={result} />
            ))}
          </Box>
        </Box>
      </Card>
    </motion.div>
  );
}

export default StandingsCard;
