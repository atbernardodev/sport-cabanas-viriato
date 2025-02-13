import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RemoveIcon from '@mui/icons-material/Remove';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function LeagueTable() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Mock data
  const tableData = [
    { 
      position: 1,
      trend: 'up',
      team: 'Sport Cabanas de Viriato e Benfica',
      played: 15,
      won: 12,
      drawn: 2,
      lost: 1,
      goalsFor: 38,
      goalsAgainst: 12,
      goalDifference: 26,
      points: 38,
      form: ['W', 'W', 'W', 'D', 'W']
    },
    {
      position: 2,
      trend: 'down',
      team: 'FC Oliveira do Conde',
      played: 15,
      won: 11,
      drawn: 2,
      lost: 2,
      goalsFor: 32,
      goalsAgainst: 15,
      goalDifference: 17,
      points: 35,
      form: ['W', 'L', 'W', 'W', 'D']
    },
    {
      position: 3,
      trend: 'same',
      team: 'GD Carregal do Sal',
      played: 15,
      won: 10,
      drawn: 3,
      lost: 2,
      goalsFor: 28,
      goalsAgainst: 14,
      goalDifference: 14,
      points: 33,
      form: ['D', 'W', 'W', 'W', 'L']
    },
    {
      position: 4,
      trend: 'up',
      team: 'AD São Romão',
      played: 15,
      won: 9,
      drawn: 3,
      lost: 3,
      goalsFor: 25,
      goalsAgainst: 16,
      goalDifference: 9,
      points: 30,
      form: ['W', 'W', 'D', 'L', 'W']
    },
    {
      position: 5,
      trend: 'down',
      team: 'GD Parada',
      played: 15,
      won: 8,
      drawn: 4,
      lost: 3,
      goalsFor: 22,
      goalsAgainst: 18,
      goalDifference: 4,
      points: 28,
      form: ['L', 'D', 'W', 'W', 'D']
    },
    {
      position: 6,
      trend: 'up',
      team: 'CD Canas de Senhorim',
      played: 15,
      won: 7,
      drawn: 5,
      lost: 3,
      goalsFor: 20,
      goalsAgainst: 15,
      goalDifference: 5,
      points: 26,
      form: ['W', 'D', 'W', 'L', 'D']
    },
    {
      position: 7,
      trend: 'same',
      team: 'GD Oliveira do Hospital',
      played: 15,
      won: 6,
      drawn: 5,
      lost: 4,
      goalsFor: 18,
      goalsAgainst: 16,
      goalDifference: 2,
      points: 23,
      form: ['D', 'D', 'W', 'L', 'W']
    },
    {
      position: 8,
      trend: 'down',
      team: 'AD Mortágua',
      played: 15,
      won: 5,
      drawn: 5,
      lost: 5,
      goalsFor: 17,
      goalsAgainst: 19,
      goalDifference: -2,
      points: 20,
      form: ['L', 'L', 'D', 'W', 'D']
    },
    {
      position: 9,
      trend: 'same',
      team: 'GD Penalva do Castelo',
      played: 15,
      won: 4,
      drawn: 6,
      lost: 5,
      goalsFor: 15,
      goalsAgainst: 20,
      goalDifference: -5,
      points: 18,
      form: ['D', 'D', 'L', 'D', 'W']
    },
    {
      position: 10,
      trend: 'down',
      team: 'AD Castro Daire',
      played: 15,
      won: 3,
      drawn: 5,
      lost: 7,
      goalsFor: 14,
      goalsAgainst: 22,
      goalDifference: -8,
      points: 14,
      form: ['L', 'D', 'L', 'L', 'D']
    }
  ];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return <ArrowUpwardIcon sx={{ color: '#4CAF50', fontSize: 16 }} />;
      case 'down':
        return <ArrowDownwardIcon sx={{ color: '#E31B23', fontSize: 16 }} />;
      default:
        return <RemoveIcon sx={{ color: '#9e9e9e', fontSize: 16 }} />;
    }
  };

  const getFormBadge = (result) => {
    const colors = {
      W: { bg: '#4CAF50', text: '#fff' },
      D: { bg: '#FFA726', text: '#fff' },
      L: { bg: '#E31B23', text: '#fff' }
    };

    return (
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 24,
          height: 24,
          borderRadius: '4px',
          backgroundColor: colors[result].bg,
          color: colors[result].text,
          fontSize: '0.75rem',
          fontWeight: 600,
          mx: 0.5
        }}
      >
        {result}
      </Box>
    );
  };

  const getPositionHighlight = (position) => {
    if (position <= 1) return '#FFD700';  // Gold for 1st
    if (position <= 3) return '#4CAF50';  // Green for promotion
    if (position >= 9) return '#E31B23';  // Red for relegation
    return 'white';
  };

  return (
    <Box sx={{ width: '100%', mt: 6, mb: 4 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          mb: 3
        }}
      >
        <EmojiEventsIcon sx={{ color: '#FFD700', fontSize: 32 }} />
        <Typography
          variant="h4"
          component={motion.h2}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          sx={{
            fontWeight: 700,
            color: 'white',
            textAlign: 'center'
          }}
        >
          Tabela Classificativa
        </Typography>
      </Box>

      <TableContainer
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        sx={{
          backgroundColor: 'rgba(17, 17, 17, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: 2,
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
        }}
      >
        <Table size={isMobile ? "small" : "medium"}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, width: 60 }}>Pos</TableCell>
              <TableCell sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, width: 40 }}></TableCell>
              <TableCell sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>Equipa</TableCell>
              <TableCell align="center" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>J</TableCell>
              <TableCell align="center" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>V</TableCell>
              <TableCell align="center" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>E</TableCell>
              <TableCell align="center" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>D</TableCell>
              <TableCell align="center" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>GM</TableCell>
              <TableCell align="center" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>GS</TableCell>
              <TableCell align="center" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>DG</TableCell>
              <TableCell align="center" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>P</TableCell>
              {!isMobile && (
                <TableCell align="center" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>Forma</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow
                key={row.position}
                sx={{
                  position: 'relative',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.05)',
                  },
                  '&::after': row.team === 'Sport Cabanas de Viriato e Benfica' ? {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 3,
                    backgroundColor: '#E31B23',
                  } : {},
                  transition: 'all 0.3s ease',
                }}
              >
                <TableCell
                  sx={{
                    color: getPositionHighlight(row.position),
                    fontWeight: 600,
                  }}
                >
                  {row.position}
                </TableCell>
                <TableCell>{getTrendIcon(row.trend)}</TableCell>
                <TableCell
                  sx={{
                    color: 'white',
                    fontWeight: row.team === 'Sport Cabanas de Viriato e Benfica' ? 600 : 400,
                  }}
                >
                  {row.team}
                </TableCell>
                <TableCell align="center" sx={{ color: 'rgba(255,255,255,0.7)' }}>{row.played}</TableCell>
                <TableCell align="center" sx={{ color: '#4CAF50' }}>{row.won}</TableCell>
                <TableCell align="center" sx={{ color: '#FFA726' }}>{row.drawn}</TableCell>
                <TableCell align="center" sx={{ color: '#E31B23' }}>{row.lost}</TableCell>
                <TableCell align="center" sx={{ color: 'rgba(255,255,255,0.7)' }}>{row.goalsFor}</TableCell>
                <TableCell align="center" sx={{ color: 'rgba(255,255,255,0.7)' }}>{row.goalsAgainst}</TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: row.goalDifference > 0 ? '#4CAF50' : row.goalDifference < 0 ? '#E31B23' : 'rgba(255,255,255,0.7)',
                    fontWeight: 500,
                  }}
                >
                  {row.goalDifference > 0 ? `+${row.goalDifference}` : row.goalDifference}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: 'white',
                    fontWeight: 600,
                  }}
                >
                  {row.points}
                </TableCell>
                {!isMobile && (
                  <TableCell align="center">
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5 }}>
                      {row.form.map((result, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + (i * 0.1) }}
                        >
                          {getFormBadge(result)}
                        </motion.div>
                      ))}
                    </Box>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          mt: 2,
          display: 'flex',
          gap: 3,
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#4CAF50' }} />
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            Zona de Promoção
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#E31B23' }} />
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            Zona de Despromoção
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default LeagueTable;
