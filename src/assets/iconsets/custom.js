import { h } from 'vue';
import CollapseIcon from '@/components/icon/CollapseIcon.vue';
import ExpandIcon from '@/components/icon/ExpandIcon.vue';

const aliases = {
  collapse: CollapseIcon,
  expand: ExpandIcon,
};

const custom = {
  component: (props) => h(aliases[props.icon]),
};

export { aliases, custom };
