package org.vaadin.diagrambuilder.event;/*
 * Copyright (c) 2012-2018 Continuum Security SLNE.  All rights reserved
 */

import com.vaadin.ui.JavaScriptFunction;

import org.vaadin.diagrambuilder.DiagramBuilder;
import org.vaadin.diagrambuilder.domain.Node;
import org.vaadin.diagrambuilder.dto.NodeDto;
import org.vaadin.diagrambuilder.listener.GroupDragEndListener;
import org.vaadin.diagrambuilder.listener.GroupDragStartListener;
import org.vaadin.diagrambuilder.listener.GroupMouseOutListener;
import org.vaadin.diagrambuilder.listener.GroupMouseOverListener;
import org.vaadin.diagrambuilder.listener.GroupRightClickListener;
import org.vaadin.diagrambuilder.listener.TaskDragEndListener;
import org.vaadin.diagrambuilder.listener.TaskDragStartListener;
import org.vaadin.diagrambuilder.listener.TaskMouseOutListener;
import org.vaadin.diagrambuilder.listener.TaskMouseOverListener;
import org.vaadin.diagrambuilder.listener.TaskRightClickListener;
import org.vaadin.diagrambuilder.util.JsonUtil;

import java.util.ArrayList;
import java.util.function.Consumer;
import java.util.logging.Level;
import java.util.logging.Logger;

import elemental.json.JsonArray;

public class NodeEvent {

    private ArrayList<TaskRightClickListener> taskRightClickListeners = new ArrayList<>();
    private ArrayList<TaskDragStartListener> taskDragStartListeners = new ArrayList<>();
    private ArrayList<TaskDragEndListener> taskDragEndListeners = new ArrayList<>();
    private ArrayList<TaskMouseOverListener> taskMouseOverListeners = new ArrayList<>();
    private ArrayList<TaskMouseOutListener> taskMouseOutListeners = new ArrayList<>();

    private ArrayList<GroupRightClickListener> groupRightClickListeners = new ArrayList<>();
    private ArrayList<GroupDragStartListener> groupDragStartListeners = new ArrayList<>();
    private ArrayList<GroupDragEndListener> groupDragEndListeners = new ArrayList<>();
    private ArrayList<GroupMouseOverListener> groupMouseOverListeners = new ArrayList<>();
    private ArrayList<GroupMouseOutListener> groupMouseOutListeners = new ArrayList<>();

    private String eventId;

    public NodeEvent() {
        this.eventId = "";
    }

    public NodeEvent(String eventId) {
        this.eventId = eventId;
    }

    public void createRightClickEvent() {
        com.vaadin.ui.JavaScript.getCurrent().addFunction(Node.ON_RIGHT_CLICK_JAVASCRIPT + this.eventId, (JavaScriptFunction) jsonArray -> {
            String type = jsonArray.getObject(0).getString("type");

            if (type.equals("task")) {
                fireEvent(jsonArray, NodeEvent.this::fireTaskRightClickListener);
            } else if (type.equals("group")) {
                fireEvent(jsonArray, NodeEvent.this::fireGroupRightClickListener);
            }

        });
    }

    public void createDragStartEvent() {
        com.vaadin.ui.JavaScript.getCurrent().addFunction(Node.ON_DRAG_START_JAVASCRIPT + this.eventId, (JavaScriptFunction) jsonArray -> {
            String type = jsonArray.getObject(0).getString("type");

            if (type.equals("task")) {
                fireEvent(jsonArray, NodeEvent.this::fireTaskDragStartClickListener);
            } else if (type.equals("group")) {
                fireEvent(jsonArray, NodeEvent.this::fireGroupDragStartClickListener);
            }

        });
    }

    public void createDragEndEvent() {
        com.vaadin.ui.JavaScript.getCurrent().addFunction(Node.ON_DRAG_END_JAVASCRIPT + this.eventId, (JavaScriptFunction) jsonArray -> {
            String type = jsonArray.getObject(0).getString("type");

            if (type.equals("task")) {
                fireEvent(jsonArray, NodeEvent.this::fireTaskDragEndClickListener);
            } else if (type.equals("group")) {
                fireEvent(jsonArray, NodeEvent.this::fireGroupDragEndClickListener);
            }

        });
    }

    public void createMouseMoveEvent() {
        com.vaadin.ui.JavaScript.getCurrent().addFunction(Node.ON_MOUSE_MOVE_JAVASCRIPT + this.eventId, (JavaScriptFunction) jsonArray -> {
            String type = jsonArray.getObject(0).getString("type");
            String event = JsonUtil.getStringValue(jsonArray, "event");

            if (type.equals("task")) {
                if ("mouseEnter".equals(event)) {
                    fireEvent(jsonArray, NodeEvent.this::fireTaskMouseOverListener);
                } else if ("mouseLeave".equals(event)) {
                    fireEvent(jsonArray, NodeEvent.this::fireTaskMouseOutListener);
                }
            } else if (type.equals("group")) {
                if ("mouseEnter".equals(event)) {
                    fireEvent(jsonArray, NodeEvent.this::fireGroupMouseOverListener);
                } else if ("mouseLeave".equals(event)) {
                    fireEvent(jsonArray, NodeEvent.this::fireGroupMouseOutListener);
                }
            }

        });
    }

    private void fireEvent(JsonArray jsonArray, Consumer<NodeDto> fireMethod) {
        try {
            NodeDto nodeDto = JsonUtil.jsonToObject(jsonArray.getObject(0).toString(), NodeDto.class);
            fireMethod.accept(nodeDto);
        } catch (Exception exception) {
            String message = "Json could'nt serialize in object: " + jsonArray.getObject(0);
            Logger.getLogger(DiagramBuilder.class.getName()).log(Level.SEVERE, message, exception);
        }
    }

    public void addRightClickListener(TaskRightClickListener listener) {
        taskRightClickListeners.add(listener);
    }

    public void addTaskDragStartListener(TaskDragStartListener listener) {
        taskDragStartListeners.add(listener);
    }

    public void addTaskDragEndListener(TaskDragEndListener listener) {
        taskDragEndListeners.add(listener);
    }

    public void addRightClickListener(GroupRightClickListener listener) {
        groupRightClickListeners.add(listener);
    }

    public void addGroupDragStartListener(GroupDragStartListener listener) {
        groupDragStartListeners.add(listener);
    }

    public void addGroupDragEndListener(GroupDragEndListener listener) {
        groupDragEndListeners.add(listener);
    }

    public void addTaskMouseOverListener(TaskMouseOverListener listener) {
        taskMouseOverListeners.add(listener);
    }

    public void addTaskMouseOutListener(TaskMouseOutListener listener) {
        taskMouseOutListeners.add(listener);
    }

    public void addGroupMouseOverListener(GroupMouseOverListener listener) {
        groupMouseOverListeners.add(listener);
    }

    public void addGroupMouseOutListener(GroupMouseOutListener listener) {
        groupMouseOutListeners.add(listener);
    }

    public void fireTaskRightClickListener(NodeDto nodeDto) {
        for (TaskRightClickListener listener : taskRightClickListeners) {
            listener.onTaskRightClick(nodeDto);
        }
    }

    public void fireTaskDragStartClickListener(NodeDto nodeDto) {
        for (TaskDragStartListener listener : taskDragStartListeners) {
            listener.onTaskDragStart(nodeDto);
        }
    }

    public void fireTaskDragEndClickListener(NodeDto nodeDto) {
        for (TaskDragEndListener listener : taskDragEndListeners) {
            listener.onTaskDragEnd(nodeDto);
        }
    }

    public void fireGroupRightClickListener(NodeDto nodeDto) {
        for (GroupRightClickListener listener : groupRightClickListeners) {
            listener.onGroupRightClick(nodeDto);
        }
    }

    public void fireGroupDragStartClickListener(NodeDto nodeDto) {
        for (GroupDragStartListener listener : groupDragStartListeners) {
            listener.onGroupDragStart(nodeDto);
        }
    }

    public void fireGroupDragEndClickListener(NodeDto nodeDto) {
        for (GroupDragEndListener listener : groupDragEndListeners) {
            listener.onGroupDragEnd(nodeDto);
        }
    }

    public void fireGroupMouseOverListener(NodeDto nodeDto) {
        for (GroupMouseOverListener listener : groupMouseOverListeners) {
            listener.onGroupMouseOver(nodeDto);
        }
    }

    public void fireGroupMouseOutListener(NodeDto nodeDto) {
        for (GroupMouseOutListener listener : groupMouseOutListeners) {
            listener.onGroupMouseOut(nodeDto);
        }
    }

    public void fireTaskMouseOverListener(NodeDto nodeDto) {
        for (TaskMouseOverListener listener : taskMouseOverListeners) {
            listener.onTaskMouseOver(nodeDto);
        }
    }

    public void fireTaskMouseOutListener(NodeDto nodeDto) {
        for (TaskMouseOutListener listener : taskMouseOutListeners) {
            listener.onTaskMouseOut(nodeDto);
        }
    }

}
