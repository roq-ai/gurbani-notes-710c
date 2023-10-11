const mapping: Record<string, string> = {
  comments: 'comment',
  companies: 'company',
  markups: 'markup',
  notes: 'note',
  scriptures: 'scripture',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
