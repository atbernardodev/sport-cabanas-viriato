import { Card, CardContent, Typography, Box, Chip, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function MatchCard({ match }) {
  const isWin = match.homeScore > match.awayScore;
  const isDraw = match.homeScore === match.awayScore;
  const resultColor = isWin ? '#4CAF50' : isDraw ? '#FFA726' : '#f44336';
  const resultText = isWin ? 'Vitória' : isDraw ? 'Empate' : 'Derrota';
  const isUpcoming = match.homeScore === '-' && match.awayScore === '-';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <Card
        sx={{
          position: 'relative',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
          cursor: 'pointer',
          overflow: 'hidden',
          '&:hover': {
            boxShadow: '0 12px 48px rgba(0,0,0,0.3)',
            '& .score-box': {
              transform: 'scale(1.05)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            },
          },
        }}
      >
        {/* Top Banner */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: isUpcoming 
              ? 'linear-gradient(90deg, #2196F3 0%, #00BCD4 100%)'
              : `linear-gradient(90deg, ${resultColor} 0%, ${resultColor}88 100%)`,
          }}
        />

        <CardContent sx={{ pt: 3, pb: '16px !important' }}>
          {/* Competition & Date */}
          <Box 
            sx={{ 
              mb: 3,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
                px: 2,
                py: 0.5,
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: '0.8rem',
                }}
              >
                {match.competition}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <CalendarTodayIcon sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }} />
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  {match.date}
                </Typography>
              </Box>
              {isUpcoming && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <AccessTimeIcon sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }} />
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    15:00
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>

          {/* Teams & Score */}
          <Box 
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 3,
              position: 'relative',
              flexWrap: 'nowrap',
              '&::after': !isUpcoming ? {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                zIndex: 0,
              } : {},
            }}
          >
            {/* Home Team */}
            <Box 
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                flex: '1 1 0',
                minWidth: 0,
                zIndex: 1,
              }}
            >
              <motion.div whileHover={{ scale: 1.1 }}>
                <Avatar
                  src={match.homeTeamLogo}
                  alt={match.homeTeam}
                  sx={{ 
                    width: 48,
                    height: 48,
                    border: '2px solid rgba(255,255,255,0.1)',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    flexShrink: 0,
                  }}
                />
              </motion.div>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: '0.9rem',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {match.homeTeam}
              </Typography>
            </Box>

            {/* Score */}
            <Box
              className="score-box"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 0.5,
                mx: 1,
                borderRadius: '12px',
                backgroundColor: isUpcoming ? 'rgba(33,150,243,0.1)' : 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                zIndex: 2,
                flexShrink: 0,
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 'bold',
                  color: 'white',
                  minWidth: 24,
                  textAlign: 'center',
                }}
              >
                {match.homeScore}
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'rgba(255,255,255,0.5)',
                  fontWeight: 'light',
                }}
              >
                :
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 'bold',
                  color: 'white',
                  minWidth: 24,
                  textAlign: 'center',
                }}
              >
                {match.awayScore}
              </Typography>
            </Box>

            {/* Away Team */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                flex: '1 1 0',
                justifyContent: 'flex-end',
                minWidth: 0,
                zIndex: 1,
              }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: '0.9rem',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  textAlign: 'right',
                }}
              >
                {match.awayTeam}
              </Typography>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Avatar
                  src={match.awayTeamLogo}
                  alt={match.awayTeam}
                  sx={{ 
                    width: 48,
                    height: 48,
                    border: '2px solid rgba(255,255,255,0.1)',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    flexShrink: 0,
                  }}
                />
              </motion.div>
            </Box>
          </Box>

          {/* Bottom Info */}
          <Box 
            sx={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1,
            }}
          >
            {/* Venue */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <LocationOnIcon sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }} />
              <Typography 
                variant="caption" 
                sx={{ 
                  color: 'rgba(255,255,255,0.7)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {match.venue}
              </Typography>
            </Box>

            {/* Result Badge or Status */}
            {!isUpcoming ? (
              <Chip
                label={resultText}
                sx={{
                  backgroundColor: `${resultColor}22`,
                  color: resultColor,
                  fontWeight: 'bold',
                  borderRadius: '8px',
                  border: `1px solid ${resultColor}44`,
                  height: '24px',
                  '& .MuiChip-label': {
                    px: 1,
                    fontSize: '0.75rem',
                  }
                }}
              />
            ) : (
              <Chip
                label="Em Breve"
                sx={{
                  backgroundColor: 'rgba(33,150,243,0.1)',
                  color: '#2196F3',
                  fontWeight: 'bold',
                  borderRadius: '8px',
                  border: '1px solid rgba(33,150,243,0.2)',
                  height: '24px',
                  '& .MuiChip-label': {
                    px: 1,
                    fontSize: '0.75rem',
                  }
                }}
              />
            )}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default MatchCard;
