import type React from 'react';
import {
  Award, Brush, Camera, Clapperboard, Film, Image, Megaphone, Music, PartyPopper, PenTool, Projector, Scissors,
  Shirt, Sparkles, Star, TrendingUp, Trophy, Truck, UserRound, Users, Video, Volume2,
} from 'lucide-react';
import type { Track } from '../data';


export const TRACK_COLORS: Record<Track, string> = {
  Film: '#3ad59f',
  Performance: '#d4af5f',
  Craft: '#008751',
  Promotion: '#8fe3c3',
  'Box Office': '#f1dca8',
  'Exhibition & Distribution': '#6fb7ff',
  Special: '#e58fb1',
};

export const CATEGORY_ICONS: Record<string, React.ElementType> = {
  'best-nollywood-film': Film,
  'best-hollywood-film': Clapperboard,
  'best-director': Video,
  'best-scene': Sparkles,
  'best-actor': Star,
  'best-actress': Star,
  'best-supporting-actor': UserRound,
  'best-supporting-actress': UserRound,
  'best-performance': Award,
  'best-cast-ensemble': Users,
  'best-screenplay': PenTool,
  'best-cinematography': Camera,
  'best-editing': Scissors,
  'best-sound': Volume2,
  'best-song': Music,
  'best-costume': Shirt,
  'best-makeup-hair': Brush,
  'best-poster': Image,
  'best-trailer': Clapperboard,
  'best-marketing': Megaphone,
  'best-premiere': PartyPopper,
  'best-box-office-nollywood': TrendingUp,
  'best-box-office-hollywood': TrendingUp,
  'best-cinema': Projector,
  'best-film-distributor': Truck,
  'lifetime-achievement': Trophy,
};

