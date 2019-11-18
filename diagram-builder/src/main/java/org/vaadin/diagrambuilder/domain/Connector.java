
package org.vaadin.diagrambuilder.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Connector details.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Connector implements Serializable {

    public static final String ON_MOUSE_MOVE_JAVASCRIPT = Connector.class.getCanonicalName() + ".onMouseMoveConnector";
    public static final String ON_RIGHT_CLICK_JAVASCRIPT = Connector.class.getCanonicalName() + ".onRightClickConnector";
    public static final String ON_LEFT_CLICK_JAVASCRIPT = Connector.class.getCanonicalName() + ".onLeftClickConnector";

    private Long id;
    private String name;
    private String onMouseMove;
    private String onRightClick;
    private String onLeftClick;

    private List<String> tags = new ArrayList<>();
    private Boolean showTag = true;

    public Connector() {
    }

    public Connector(String name) {
        this.name = name;
    }

    public Connector(String name, Boolean showTag) {
        this.name = name;
        this.tags.add(name);
        this.showTag = showTag;
    }

    public Connector(String name, List<String> tags, Boolean showTag) {
        this.name = name;
        this.tags = tags;
        this.showTag = showTag;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public String getOnMouseMove() {
        return onMouseMove;
    }

    public void setOnMouseMove(String onMouseMove) {
        this.onMouseMove = onMouseMove;
    }

    public String getOnRightClick() {
        return onRightClick;
    }

    public void setOnRightClick(String onRightClick) {
        this.onRightClick = onRightClick;
    }

    public String getOnLeftClick() {
        return onLeftClick;
    }

    public void setOnLeftClick(String onLeftClick) {
        this.onLeftClick = onLeftClick;
    }

    public Boolean getShowName() {
        return showTag;
    }

    public void setShowName(Boolean showName) {
        this.showTag = showName;
    }

    public Boolean getShowTag() {
        return showTag;
    }

    public void setShowTag(Boolean showTag) {
        this.showTag = showTag;
    }
}
