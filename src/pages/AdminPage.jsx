import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,
    IconButton, Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, TextField, Typography, CircularProgress,
    Snackbar, Alert, Chip, MenuItem
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';

const API = `${import.meta.env.VITE_API_URL}/project`;
const FEEDBACK_API = `${import.meta.env.VITE_API_URL}/feedback`;
const ADMIN_PASSWORD = 'admin5cord';

const PROJECT_TYPES = [
    { value: 'pet', label: 'Пет-проект' },
    { value: 'test', label: 'Тестовое задание' },
    { value: 'real', label: 'Реальная задача' },
];

const emptyForm = {
    title: '',
    descriptrion: '',
    type: '',
    link: '',
    linkPhone: '',
    fullI: '',
    miniI: '',
    pcImg: '',
    stack: '',
};

export function AdminPage() {
    const [authed, setAuthed] = useState(() => sessionStorage.getItem('admin_auth') === '1');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);

    const [tab, setTab] = useState('projects');

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    const [feedbacks, setFeedbacks] = useState([]);
    const [feedbackLoading, setFeedbackLoading] = useState(false);
    const [deleteFeedbackId, setDeleteFeedbackId] = useState(null);

    const [dialogOpen, setDialogOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [form, setForm] = useState(emptyForm);
    const [saving, setSaving] = useState(false);

    const [deleteId, setDeleteId] = useState(null);
    const [deleteTitle, setDeleteTitle] = useState('');

    const [snack, setSnack] = useState({ open: false, msg: '', severity: 'success' });

    useEffect(() => {
        if (authed) { fetchProjects(); fetchFeedbacks(); }
    }, [authed]);

    const fetchProjects = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(API);
            setProjects(data);
        } catch {
            showSnack('Ошибка загрузки', 'error');
        } finally {
            setLoading(false);
        }
    };

    const fetchFeedbacks = async () => {
        setFeedbackLoading(true);
        try {
            const { data } = await axios.get(FEEDBACK_API);
            setFeedbacks([...data].reverse());
        } catch {
            showSnack('Ошибка загрузки обращений', 'error');
        } finally {
            setFeedbackLoading(false);
        }
    };

    const handleDeleteFeedback = async () => {
        try {
            await axios.delete(`${FEEDBACK_API}/${deleteFeedbackId}`);
            showSnack('Обращение удалено', 'success');
            setDeleteFeedbackId(null);
            fetchFeedbacks();
        } catch {
            showSnack('Ошибка удаления', 'error');
        }
    };

    const handleLogin = () => {
        if (password === ADMIN_PASSWORD) {
            sessionStorage.setItem('admin_auth', '1');
            setAuthed(true);
        } else {
            setLoginError(true);
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('admin_auth');
        setAuthed(false);
        setPassword('');
    };

    const openCreate = () => {
        setEditingId(null);
        setForm(emptyForm);
        setDialogOpen(true);
    };

    const openEdit = (project) => {
        setEditingId(project.id);
        setForm({
            title: project.title || '',
            descriptrion: project.descriptrion || '',
            type: project.type || '',
            link: project.link || '',
            linkPhone: project.linkPhone || '',
            fullI: project.fullI || '',
            miniI: project.miniI || '',
            pcImg: project.pcImg || '',
            stack: project.stack || '',
        });
        setDialogOpen(true);
    };

    const handleSave = async () => {
        if (!form.title.trim()) return;
        setSaving(true);
        try {
            if (editingId) {
                await axios.put(`${API}/${editingId}`, form);
                showSnack('Проект обновлён', 'success');
            } else {
                await axios.post(API, form);
                showSnack('Проект создан', 'success');
            }
            setDialogOpen(false);
            fetchProjects();
        } catch {
            showSnack('Ошибка сохранения', 'error');
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`${API}/${deleteId}`);
            showSnack('Проект удалён', 'success');
            setDeleteId(null);
            fetchProjects();
        } catch {
            showSnack('Ошибка удаления', 'error');
        }
    };

    const showSnack = (msg, severity) => setSnack({ open: true, msg, severity });

    const fields = [
        { key: 'title', label: 'Название *' },
        { key: 'descriptrion', label: 'Описание', multiline: true, rows: 3 },
        { key: 'link', label: 'Ссылка (десктоп)' },
        { key: 'linkPhone', label: 'Ссылка (мобайл)' },
        { key: 'miniI', label: 'Иконка (URL)' },
        { key: 'fullI', label: 'Полное изображение (URL)' },
        { key: 'pcImg', label: 'Скриншот ПК (URL)' },
        { key: 'stack', label: 'Стек (через запятую)' },
    ];

    const typeLabel = PROJECT_TYPES.find(t => t.value === form.type)?.label;

    if (!authed) {
        return (
            <Box sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#F0F0F0',
            }}>
                <Paper elevation={3} sx={{ p: 4, width: 340, borderRadius: 3 }}>
                    <Typography variant="h5" fontWeight={700} mb={3} fontFamily="Montserrat, sans-serif">
                        Admin
                    </Typography>
                    <TextField
                        fullWidth
                        label="Пароль"
                        type="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); setLoginError(false); }}
                        onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                        error={loginError}
                        helperText={loginError ? 'Неверный пароль' : ''}
                        sx={{ mb: 2 }}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleLogin}
                        sx={{ bgcolor: '#1c1c1c', '&:hover': { bgcolor: '#333' }, fontFamily: 'Montserrat, sans-serif' }}
                    >
                        Войти
                    </Button>
                </Paper>
            </Box>
        );
    }

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#F0F0F0', p: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    {[['projects', 'Проекты'], ['feedback', 'Обращения']].map(([key, label]) => (
                        <Button
                            key={key}
                            variant={tab === key ? 'contained' : 'outlined'}
                            onClick={() => setTab(key)}
                            sx={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 600,
                                ...(tab === key
                                    ? { bgcolor: '#1c1c1c', '&:hover': { bgcolor: '#333' } }
                                    : { borderColor: '#1c1c1c', color: '#1c1c1c', '&:hover': { borderColor: '#333', bgcolor: 'rgba(0,0,0,0.04)' } }),
                            }}
                        >
                            {label}
                            {key === 'feedback' && feedbacks.length > 0 && (
                                <Box component="span" sx={{
                                    ml: 1, px: 0.8, py: 0.1,
                                    bgcolor: tab === 'feedback' ? 'rgba(255,255,255,0.25)' : '#1c1c1c',
                                    color: tab === 'feedback' ? '#fff' : '#fff',
                                    borderRadius: 10,
                                    fontSize: 11,
                                    lineHeight: '18px',
                                    display: 'inline-block',
                                    minWidth: 18,
                                    textAlign: 'center',
                                }}>
                                    {feedbacks.length}
                                </Box>
                            )}
                        </Button>
                    ))}
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    {tab === 'projects' && (
                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            onClick={openCreate}
                            sx={{ bgcolor: '#1c1c1c', '&:hover': { bgcolor: '#333' }, fontFamily: 'Montserrat, sans-serif' }}
                        >
                            Добавить
                        </Button>
                    )}
                    <IconButton onClick={handleLogout} title="Выйти">
                        <LogoutIcon />
                    </IconButton>
                </Box>
            </Box>

            {tab === 'projects' && (
                loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
                        <CircularProgress sx={{ color: '#1c1c1c' }} />
                    </Box>
                ) : (
                    <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ bgcolor: '#1c1c1c' }}>
                                    <TableCell sx={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>ID</TableCell>
                                    <TableCell sx={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>Название</TableCell>
                                    <TableCell sx={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>Стек</TableCell>
                                    <TableCell sx={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>Ссылка</TableCell>
                                    <TableCell sx={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }} align="right">Действия</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {projects.map((p) => (
                                    <TableRow key={p.id} hover>
                                        <TableCell sx={{ fontFamily: 'Montserrat, sans-serif', color: '#888' }}>{p.id}</TableCell>
                                        <TableCell sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>{p.title}</TableCell>
                                        <TableCell>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                {p.stack?.split(', ').map((t, i) => (
                                                    <Chip key={i} label={t} size="small" sx={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11 }} />
                                                ))}
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            {p.link && (
                                                <a href={p.link} target="_blank" rel="noreferrer" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: '#1c1c1c' }}>
                                                    {p.link.replace(/^https?:\/\//, '').split('/')[0]}
                                                </a>
                                            )}
                                        </TableCell>
                                        <TableCell align="right">
                                            <IconButton onClick={() => openEdit(p)} size="small">
                                                <EditIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton
                                                onClick={() => { setDeleteId(p.id); setDeleteTitle(p.title); }}
                                                size="small"
                                                sx={{ color: '#d32f2f' }}
                                            >
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {projects.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={5} align="center" sx={{ py: 4, fontFamily: 'Montserrat, sans-serif', color: '#888' }}>
                                            Проектов нет
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )
            )}

            {tab === 'feedback' && (
                feedbackLoading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
                        <CircularProgress sx={{ color: '#1c1c1c' }} />
                    </Box>
                ) : (
                    <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ bgcolor: '#1c1c1c' }}>
                                    <TableCell sx={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>Дата</TableCell>
                                    <TableCell sx={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>Имя</TableCell>
                                    <TableCell sx={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>Email</TableCell>
                                    <TableCell sx={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>Сообщение</TableCell>
                                    <TableCell sx={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }} align="right">Действия</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {feedbacks.map((f) => (
                                    <TableRow key={f.id} hover>
                                        <TableCell sx={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: '#888', whiteSpace: 'nowrap' }}>
                                            {f.sentAt ? new Date(f.sentAt).toLocaleString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—'}
                                        </TableCell>
                                        <TableCell sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}>{f.nameUser}</TableCell>
                                        <TableCell>
                                            <a href={`mailto:${f.emailUser}`} style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: '#1c1c1c' }}>
                                                {f.emailUser}
                                            </a>
                                        </TableCell>
                                        <TableCell sx={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: '#444', maxWidth: 480, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                                            {f.messageUser}
                                        </TableCell>
                                        <TableCell align="right">
                                            <IconButton
                                                onClick={() => setDeleteFeedbackId(f.id)}
                                                size="small"
                                                sx={{ color: '#d32f2f' }}
                                            >
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {feedbacks.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={5} align="center" sx={{ py: 4, fontFamily: 'Montserrat, sans-serif', color: '#888' }}>
                                            Обращений нет
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )
            )}

            {/* Create / Edit dialog */}
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" fullWidth>
                <DialogTitle sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    {editingId ? 'Редактировать проект' : 'Новый проект'}
                </DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: '16px !important' }}>
                    {fields.map(({ key, label, multiline, rows }) => (
                        <TextField
                            key={key}
                            label={label}
                            value={form[key]}
                            onChange={(e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))}
                            multiline={multiline}
                            rows={rows}
                            size="small"
                            InputLabelProps={{ style: { fontFamily: 'Montserrat, sans-serif' } }}
                            inputProps={{ style: { fontFamily: 'Montserrat, sans-serif' } }}
                        />
                    ))}
                    <TextField
                        select
                        label="Тип проекта"
                        value={form.type}
                        onChange={(e) => setForm((prev) => ({ ...prev, type: e.target.value }))}
                        size="small"
                        InputLabelProps={{ style: { fontFamily: 'Montserrat, sans-serif' } }}
                        inputProps={{ style: { fontFamily: 'Montserrat, sans-serif' } }}
                    >
                        <MenuItem value=""><em>Не указан</em></MenuItem>
                        {PROJECT_TYPES.map(({ value, label }) => (
                            <MenuItem key={value} value={value} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                {label}
                            </MenuItem>
                        ))}
                    </TextField>
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 2 }}>
                    <Button onClick={() => setDialogOpen(false)} sx={{ fontFamily: 'Montserrat, sans-serif', color: '#555' }}>
                        Отмена
                    </Button>
                    <Button
                        onClick={handleSave}
                        variant="contained"
                        disabled={saving || !form.title.trim()}
                        sx={{ bgcolor: '#1c1c1c', '&:hover': { bgcolor: '#333' }, fontFamily: 'Montserrat, sans-serif' }}
                    >
                        {saving ? <CircularProgress size={18} sx={{ color: '#fff' }} /> : 'Сохранить'}
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Delete feedback confirm dialog */}
            <Dialog open={!!deleteFeedbackId} onClose={() => setDeleteFeedbackId(null)}>
                <DialogTitle sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>Удалить обращение?</DialogTitle>
                <DialogContent>
                    <Typography fontFamily="Montserrat, sans-serif">
                        Обращение будет удалено без возможности восстановления.
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 2 }}>
                    <Button onClick={() => setDeleteFeedbackId(null)} sx={{ fontFamily: 'Montserrat, sans-serif', color: '#555' }}>
                        Отмена
                    </Button>
                    <Button
                        onClick={handleDeleteFeedback}
                        variant="contained"
                        sx={{ bgcolor: '#d32f2f', '&:hover': { bgcolor: '#b71c1c' }, fontFamily: 'Montserrat, sans-serif' }}
                    >
                        Удалить
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Delete confirm dialog */}
            <Dialog open={!!deleteId} onClose={() => setDeleteId(null)}>
                <DialogTitle sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>Удалить проект?</DialogTitle>
                <DialogContent>
                    <Typography fontFamily="Montserrat, sans-serif">
                        «{deleteTitle}» будет удалён без возможности восстановления.
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 2 }}>
                    <Button onClick={() => setDeleteId(null)} sx={{ fontFamily: 'Montserrat, sans-serif', color: '#555' }}>
                        Отмена
                    </Button>
                    <Button
                        onClick={handleDelete}
                        variant="contained"
                        sx={{ bgcolor: '#d32f2f', '&:hover': { bgcolor: '#b71c1c' }, fontFamily: 'Montserrat, sans-serif' }}
                    >
                        Удалить
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                open={snack.open}
                autoHideDuration={3000}
                onClose={() => setSnack((s) => ({ ...s, open: false }))}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert severity={snack.severity} sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {snack.msg}
                </Alert>
            </Snackbar>
        </Box>
    );
}
