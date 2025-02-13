import { Dialog, DialogContent, DialogTitle, IconButton, Typography, Box, Grid, Avatar, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CakeIcon from '@mui/icons-material/Cake';
import HeightIcon from '@mui/icons-material/Height';
import ScaleIcon from '@mui/icons-material/Scale';
import SportsIcon from '@mui/icons-material/Sports';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { motion } from 'framer-motion';

const StatBox = ({ icon: Icon, label, value, color = 'primary.main' }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      p: 2,
      bgcolor: 'background.paper',
      borderRadius: 2,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    }}
  >
    <Icon sx={{ fontSize: '2rem', color: color, mb: 1 }} />
    <Typography variant="body2" color="text.secondary" gutterBottom>
      {label}
    </Typography>
    <Typography variant="h6" color="text.primary" sx={{ fontWeight: 'bold' }}>
      {value}
    </Typography>
  </Box>
);

function PlayerDetailsDialog({ open, onClose, player }) {
  if (!player) return null;

  // Sample statistics - replace with real data
  const stats = {
    appearances: 24,
    goals: player.position === "Avançado" ? 12 : player.position === "Médio" ? 5 : 0,
    assists: player.position === "Médio" ? 8 : player.position === "Avançado" ? 4 : 1,
    minutesPlayed: 1850,
    yellowCards: 3,
    redCards: 0
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        component: motion.div,
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 }
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          bgcolor: 'primary.main',
          color: 'white',
          pb: 3
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            src={player.image}
            alt={player.name}
            sx={{
              width: 80,
              height: 80,
              border: '3px solid white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          />
          <Box>
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
              {player.name}
            </Typography>
            <Typography variant="subtitle1">
              #{player.number} • {player.position}
            </Typography>
          </Box>
        </Box>
        <IconButton
          onClick={onClose}
          sx={{ color: 'white' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ mt: 2 }}>
        <Grid container spacing={3}>
          {/* Personal Information */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
              Informação Pessoal
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CakeIcon color="primary" />
                  <Typography>{player.age} anos</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <HeightIcon color="primary" />
                  <Typography>{player.height} cm</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <ScaleIcon color="primary" />
                  <Typography>{player.weight} kg</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
          </Grid>

          {/* Season Statistics */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
              Estatísticas da Temporada
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <StatBox
                  icon={SportsIcon}
                  label="Jogos"
                  value={stats.appearances}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <StatBox
                  icon={EmojiEventsIcon}
                  label="Golos"
                  value={stats.goals}
                  color="success.main"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <StatBox
                  icon={EmojiEventsIcon}
                  label="Assistências"
                  value={stats.assists}
                  color="info.main"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <StatBox
                  icon={AccessTimeIcon}
                  label="Minutos Jogados"
                  value={stats.minutesPlayed}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <StatBox
                  icon={SportsIcon}
                  label="Cartões Amarelos"
                  value={stats.yellowCards}
                  color="warning.main"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <StatBox
                  icon={SportsIcon}
                  label="Cartões Vermelhos"
                  value={stats.redCards}
                  color="error.main"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default PlayerDetailsDialog;
